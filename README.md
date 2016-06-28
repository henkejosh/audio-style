# SoundCloud Clone

[Heroku link][heroku] **Note:** This **will** be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Replicate the SoundCloud app's key features, functionality, and overall aestethic. By the end of week 9, this app will satisfy the following criteria:

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
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (6/28)

**Objective:** Functioning rails project with front-end Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Songs and Comments Models functional. (6/30)

**Objective:** Songs and Comments can be created, read, edited and destroyed through
the API.

- [ ] create `Song`, 'Comment' models
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for each (controllers)
- [ ] jBuilder views for notes
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (7/3)

**Objective:** Songs/Comments can be created, read, edited and destroyed with the user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `...`
- [ ] save to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (7/4)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Allow Complex Styling in User Profiles (7/7)

**objective:** Enable complex styling of profile pages.

- [ ] Use Rails helpers to sanitize HTML before rendering.

### Phase 6: Styling Cleanup and Seeding (7/9)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Wave Forms
- [ ] Likes

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
