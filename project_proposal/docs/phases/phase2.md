# Phase 2: Flux Architecture and Note CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* PhotosIndex
  - PhotosIndexItem

### Stores
* Photo

### Actions
* ApiActions.receiveAllPhotos -> triggered by ApiUtil
* ApiActions.receiveSinglePhoto
* ApiActions.deletePhoto
* NoteActions.fetchAllPhotos -> triggers ApiUtil
* NoteActions.fetchSinglePhoto
* NoteActions.createPhoto
* NoteActions.editPhoto
* NoteActions.destroyPhoto

### ApiUtil
* ApiUtil.fetchAllPhotos
* ApiUtil.fetchSinglePhoto
* ApiUtil.createPhoto
* ApiUtil.editPhoto
* ApiUtil.destroyPhoto

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
