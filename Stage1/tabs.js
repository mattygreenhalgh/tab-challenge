console.log('log from tabs.js');
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
                tabContent.classList.remove('active')
            })
            //removes active class 
        tabs.forEach(tab => {
                tab.classList.remove('active')
            })
            //adds active class to the tab that is active
        tab.classList.add('active')
            //adds active class to the content that is active
        target.classList.add('active')
    })
});