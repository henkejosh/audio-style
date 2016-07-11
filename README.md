# SoundCloud Clone

[Heroku link][heroku] **Note:** This **will** be a link to your production site

[heroku]: https://soundot.herokuapp.com/

## Minimum Viable Product

Replicate the SoundCloud app's key features, functionality, and overall aesthetic. By the end of week 9, this app will satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Comments
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Song CRUD
  - [ ] Ability to add, update, delete songs from a user's page
- [ ] Continuous play while navigating the site
  - [ ] Song display at bottom of page
  - [ ] No loading issues while navigating (don't break stream!)
- [ ] User Pages
  - [ ] Links to followed artists
  - [ ] Link to all personal playlists

## Design Docs
* [View Wireframes][views]
* [React Components -- not started][components]
* [Flux Cycles -- not started][flux-cycles]
* [API endpoints -- started][api-endpoints]
* [DB schema -- not started][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication

**Objective:** Functioning rails project with front-end Authentication

- [ ] Host on Heroku
- [ ] Rails User JSON Api
- [ ] Front-End Authentication
- [ ] Style front-end Authentication
- [ ] Guest demo login
- [ ] Navbar
- [ ] Style Navbar

### Phase 2: Songs and Comments Models functional

**Objective:** Songs and Comments can be created, read, edited and destroyed through
the API.

- [ ] Song CRUD JSON API
- [ ] Some Song Seed Data
- [ ] Song Index component
- [ ] Song Index Item Component
- [ ] Style all Song Components

### Phase 3: Flux Architecture and Router

**Objective:** Songs/Comments can be created, read, edited and destroyed with the user interface.

- [ ] Completed Song Playing feature
- [ ] Comments component
- [ ] Style comments
- [ ] Style song playing feature

### Phase 4: Search

**Objective:** Build and style fully functional search feature

- [ ] Search Components
- [ ] Style Search

### Phase 5: User Profiles

- [ ] User Profile page
- [ ] Style profile page
- [ ] Update search to include other Users

### Phase 6: Seeding

**objective:** Make the site feel more cohesive and awesome.

- [ ] Seed Everything

### Phase 7:
- [ ] Production Readme

### Bonus Features (TBD)
- [ ] Wave Forms
- [ ] Likes

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
