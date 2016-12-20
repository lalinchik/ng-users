function PaginationController($injector, UserTableService) {
    this.limitOptions = $injector.get('limitOptions');
    this.currentPage = 1;
    this.pages = Array.from({length: 5}).map((item, index) => index + 1);
    this.limit = UserTableService.getLimit();


    this.setLimit = (limit) => {
        this.limitChange({limit: limit});
    };


    this.setPage = (page) => {
        this.currentPage = page;
        this.pageChange({page: page});
    };

    this.next = () => {
        this.setPage(this.currentPage + 1);
    };

    this.prev = () => {
        if (this.currentPage > 1) {
            this.setPage(this.currentPage - 1);
        }
    }
}