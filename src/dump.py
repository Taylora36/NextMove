import json
from app import app
from api.models import db, APICache

cache = []

with app.app_context():
  db_states = APICache.query.all()
  for state in db_states:
    cache.append(state.serialize())

with open('./cache/stateData.json', 'wt') as cachedStates:
  cachedStates.write(json.dumps(cache))