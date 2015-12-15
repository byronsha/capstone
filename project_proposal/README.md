# Name TBD (Flickr clone)

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

TBD is a web application inspired by Flickr built using Ruby on Rails
and React.js. TBD allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Upload, view, share, delete photos
- [ ] Organize photos within albums
- [ ] Create groups and add photos to groups. Multiple users
      can upload or add photos to a group and have discussion.
- [ ] Tag photos with multiple tags and search photos by tag
- [ ] Post comments on photos and galleries
- [ ] Follow other users
- [ ] Favorite specific photos
- [ ] Search for photos based on geographic location

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, User and Photo model (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Immediately after logging
in, the user will be redirected to the photos index page, which will have a feed
of the latest photos.

I also want to being with a small amount of seed data for users and photos. My
database schema will allow me to simply insert into the join tables when I add
more features later.

[Details][phase-one]

### Phase 2: Flux Architecture and Photo CRUD (1.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Photo store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Photo `Index` and `IndexItem`.

Clicking on an IndexItem will redirect to that Photo's show page, which will
contain comments and extra details about the photo, like the user, number of
favorites, and links to any albums or groups that the photo is included in.

At the end of Phase 2, users will be able to log in, see a feed of photos, and
be able to click on a photo to view all of its details.

[Details][phase-two]

### Phase 3: Albums and Groups (2 days)

An album belongs to a user and has many photos that belong to that user.
An album may not contain photos that belong to another user. An album has an
Index view which will have a photo feed. Similarly to the main index, clicking
a photo will redirect to the photo's show page.

Albums can be accessed from a user's show page which will include different
tabs, Summary, Albums, Groups, Favorites, Following.

A group is created by a single user, who is the moderator. The moderator can
remove any photos or comments or delete the entire group. Multiple users may
join the group and then add photos to the group. Groups will have a show page
with a feed of photos. It will also contain a list of all of the members and
links to each of their profiles. Members of the group will also be able to leave
comments about the group.

Photos will use 'cascade destroy' so that a deleted photo will also be removed
from any album or group.

[Details][phase-three]

### Phase 4: Favorites and Followers (1 day)

Allow users to follow other users and favorite photos. A user's profile will
show numbers for followed/following users, a tab for all favorited photos, and
a tab with links to followed users.

[Details][phase-four]

### Phase 5: Tags and Taggings (1 day)

Users may tag photos. Each photo's show page will have a list of its tags and
links to a tag show page which will contain a feed of photos with that tag.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (3 days)

Focus on creating seed data and obtaining a substantial number of high res photos.
Work on CSS, cleanup, and make everything aesthetic.

At this point my site will be have the following features completed:

- [ ] Users can sign up/sign in, which will redirect to the photos index page.
- [ ] Users have profiles which contain tabs for Summary, Albums, Groups,
      Favorites, Following.

      Summary - Info about the user
      Albums - A list of a user's albums. The list will show a title, thumbnail,
               number of photos, and a link to the album.
      Groups - A list of groups that the user belongs to. The list will show
               group names, thumbnail, number of members, and a link to the group.
      Favorites - A feed of photos that the user has favorited.
      Following - A list of users that the user is following. The list will show
                  names, thumbnails, and a link to the followed user's profile.

- [ ] Photo show page will show an enlarged version of the photo, small snippet
      about the owner, comments, comment form, number of favorites, and tags.

- [ ] Album show page has a feed of photos.

- [ ] Group index will display a list of all groups and a link to each.
- [ ] Group show page has a feed of photos, list of members, comments, and comment form.

### Bonus Features (TBD)

- [ ] Adding locations to photos for use with Google Maps
- [ ] Filter photos by different categories like location, nature, technology, season, etc.
- [ ] Slideshows and scrolling views of photos
- [ ] Organizing feeds in cool ways, like by color
- [ ] Infinite scroll for photo feeds
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
