function UserTableController() {
  this.isPopupShow = false;
  this.columnList = ['Avatar', 'Name', 'Gender', 'Nat'];

  this.openPopup = function () {
    if (this.isPopupShow) {
      this.isPopupShow = false;
    } else {
      this.isPopupShow = true;
    }

    console.log(this.isPopupShow);
  }
}
