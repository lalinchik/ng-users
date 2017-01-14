function UserTableController() {
  this.isPopupShow = false;
  this.columnList = [
    {title: 'Avatar', hidden: false, renderer: (user) => `<img class="avatar" src="${user.picture.thumbnail}">`},
    {title: 'Name', hidden: false, renderer: (user) => `${user.name.title} ${user.name.first} ${user.name.last}`},
    {title: 'Gender', hidden: false, renderer: (user) => user.gender},
    {title: 'Nationality', hidden: false, renderer: (user) => user.nat},
    {title: 'Email', hidden: false, renderer: (user) => `<a href="mailto:${user.email}">${user.email}</a>`}
  ];

  this.openPopup = function () {
    this.isPopupShow = !this.isPopupShow;
  };

  this.toggleColumn = function (columnName) {
    const column = this.columnList.find(column => column.title === columnName);
    column.hidden = !column.hidden;
  }
}
