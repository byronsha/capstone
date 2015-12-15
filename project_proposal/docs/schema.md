# Schema Information

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | not null
full_name   | string    | not null
summary     | text      |

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | text      |
photo_url   | string    | not null

## album_photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
album_id    | integer   | not null, foreign key (references albums), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      |
moderator_id| integer   | not null, foreign key (references users), indexed

## group_members
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references groups), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## group_photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references groups), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed

## followers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
following_id| integer   | not null, foreign key (references users), indexed

## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
photo_id    | integer   | not null, foreign key (references photos), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed

## locations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    |
city        | string    |
country     | string    | not null, foreign key (references photos), indexed
latitude    | float     | not null
longitude   | float     | not null
continent_id| integer   | not null, foreign key (references continents), indexed

## continents
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## photo_locations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
location_id | integer   | not null, foreign key (references locations), indexed

## photo_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
body        | text      | not null

## group_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references groups), indexed
body        | text      | not null
