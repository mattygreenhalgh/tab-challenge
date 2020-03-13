console.log('log from tabs.js');
const tabs = querySelectorAll('[data-tab-target]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = querySelector(tab.dataset.tabTarget)
        target.classlist.add('active')
    })
});