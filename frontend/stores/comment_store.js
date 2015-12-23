var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher.js'),
    CommentConstants = require('../constants/comment_constants.js'),
    CommentStore = new Store(AppDispatcher);

var _comments = [];

var resetComments = function (comments) {
  _comments = comments;
};

var createComment = function (comment) {
  _comments.push(comment);
};

var deleteComment = function (comment) {
  for (var i = 0; i < _comments.length; i++) {
    if (_comments[i].id === comment.id) {
      _comments.splice(i, 1);
    }
  }
};

CommentStore.all = function () {
  return _comments.slice();
};

CommentStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case CommentConstants.PHOTO_COMMENTS_RECEIVED:
      resetComments(payload.comments);
      CommentStore.__emitChange();
      break;
    case CommentConstants.CREATE_COMMENT:
      createComment(payload.comment);
      CommentStore.__emitChange();
      break;
    case CommentConstants.DELETE_COMMENT:
      deleteComment(payload.comment);
      CommentStore.__emitChange();
      break;
  }
  // CommentStore.__emitChange();
}

module.exports = CommentStore;
