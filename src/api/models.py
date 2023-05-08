from flask_sqlalchemy import SQLAlchemy

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    _password = db.Column(db.String(128), unique=False, nullable=False)
    favorites = db.relationship("Favorites", uselist=True)

    def __repr__(self):
        return '<User {}>'.format(self.email)

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "favorites": [fav.stateName for fav in self.favorites]
            # do not serialize the password, its a security breach
        }
    
    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        self._password = generate_password_hash(password)

    def check_password_hash(self, password):
        return check_password_hash(self.password, password)

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    stateName = db.Column(db.String(32))

class APICache(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    stateName = db.Column(db.String(32))
    response = db.Column(db.JSON)
