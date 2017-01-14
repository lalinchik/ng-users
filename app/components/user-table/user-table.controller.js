function UserTableController(UserTableService) {
  this.isPopupShow = false;
  this.columnList = ['Avatar', 'Name', 'Gender', 'Nat'];

  this.openPopup = function () {
    this.isPopupShow = !this.isPopupShow;
  };

  this.toggleColumn = function (columnName) {
      if (columnName === 'Avatar') {
        this.isAvatarColumnHide = !this.isAvatarColumnHide;
      } else if (columnName === 'Name') {
        this.isNameColumnHide = !this.isNameColumnHide;
      } else if (columnName === 'Gender') {
        this.isGenderColumnHide = !this.isGenderColumnHide;
      } else if (columnName === 'Nat') {
        this.isNatColumnHide = !this.isNatColumnHide;
      }
  }
}
