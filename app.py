# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
from config import Config
from models import db, User, Post

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)

db.init_app(app)


with app.app_context():
    db.create_all()



@app.route('/')
def home():
    return "Welcome to the Blog API! Use /api/posts, /api/register, /api/login etc."

# User registration
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    if User.query.filter_by(username=data['username']).first():
        return jsonify({'error': 'User already exists'}), 400
    user = User(username=data['username'], password=data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'})

# User login
@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username'], password=data['password']).first()
    if user:
        return jsonify({'message': 'Login successful'})
    return jsonify({'error': 'Invalid credentials'}), 401

# Get all posts
@app.route('/api/posts', methods=['GET'])
def get_posts():
    posts = Post.query.all()
    return jsonify([
        {'id': p.id, 'title': p.title, 'content': p.content, 'author': p.author}
        for p in posts
    ])

# Add new post
@app.route('/api/posts', methods=['POST'])
def add_post():
    data = request.json
    post = Post(title=data['title'], content=data['content'], author=data['author'])
    db.session.add(post)
    db.session.commit()
    return jsonify({'message': 'Post created'})

# Delete post
@app.route('/api/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    post = Post.query.get_or_404(post_id)
    db.session.delete(post)
    db.session.commit()
    return jsonify({'message': 'Post deleted'})

if __name__ == '__main__':
    app.run(debug=True)
