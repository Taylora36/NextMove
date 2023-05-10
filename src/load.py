import json
from app import app
from api.models import db, APICache

cache = []

with open('./cache/stateData.json', 'rt') as cachedStates:
  cache = json.load(cachedStates)

with app.app_context():
  for state in cache:
    db.session.merge(APICache(**state))
  db.session.commit()
