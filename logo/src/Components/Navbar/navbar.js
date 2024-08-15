export function toggleFilter() {
    const filterSidebar = document.getElementById('filter-sidebar');
    const mainContent = document.querySelector('.main-content');
    const hideFilter = document.querySelector('.hide-filter');

    if (filterSidebar.style.width === '0px' || filterSidebar.style.width === '') {
        filterSidebar.style.width = '200px';
        filterSidebar.style.padding = '20px';
        mainContent.style.marginLeft = '240px';
        hideFilter.style.display = 'block';
    } else {
        filterSidebar.style.width = '0';
        filterSidebar.style.padding = '0';
        mainContent.style.marginLeft = '0';
        hideFilter.style.display = 'none';
    }
}

