function UserTableController() {
  this.isPopupShow = false;
  this.columnList = ['Avatar', 'Name', 'Gender', 'Nat'];

  this.openPopup = function () {
    this.isPopupShow = !this.isPopupShow;
  }
}
