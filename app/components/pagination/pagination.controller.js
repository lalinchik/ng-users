function PaginationController($injector, UserTableService) {
    this.paginationListConst = $injector.get('paginationListConst');

    this.selectNumber = () => {
        this.paginationApply({limit: this.limit});
    }
}