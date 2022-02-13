"""Added location data

Revision ID: bcc502fd6c4a
Revises: d35dae13b29b
Create Date: 2022-02-12 22:13:54.237380

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'bcc502fd6c4a'
down_revision = 'd35dae13b29b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('lat', sa.Float(), nullable=True))
    op.add_column('users', sa.Column('lng', sa.Float(), nullable=True))
    op.add_column('users', sa.Column('last_update', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'last_update')
    op.drop_column('users', 'lng')
    op.drop_column('users', 'lat')
    # ### end Alembic commands ###
