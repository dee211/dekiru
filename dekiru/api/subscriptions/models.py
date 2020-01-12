from sqlalchemy import MetaData
from sqlalchemy import Table, Column, Integer, String, Date

meta = MetaData()

question = Table(
    'request', meta,
    Column('id', Integer, primary_key=True),
    Column('name', String(200), nullable=True),
    Column('email', String(500), nullable=False),
    Column('date', Date, nullable=False),
    # Column('price', Integer, ForeignKey('price.id', ondelete='CASCADE'))
)
