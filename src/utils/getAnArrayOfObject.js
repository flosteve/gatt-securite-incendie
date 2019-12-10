import React from 'react';

class GetAnArrayOfObject {
    static formatTabs = tabsTypeEquipements => {
        const arrayTabs = [];

        tabsTypeEquipements.map(tab => {
            const currentTab = {
                tabContent: (
                    <div dangerouslySetInnerHTML={{ __html: tab.tabContent }} />
                ),
                tabButton: tab.tabButton,
            };
            arrayTabs.push(currentTab);
            return '';
        });
        return arrayTabs;
    };

    static formatAccordion = tabsFaq => {
        const arrayTabs = [];

        tabsFaq.map(tab => {
            const currentTab = {
                content: (
                    <div dangerouslySetInnerHTML={{ __html: tab.faqAnswer }} />
                ),
                title: tab.faqQuestion,
            };
            arrayTabs.push(currentTab);
            return '';
        });
        return arrayTabs;
    };
}

export default GetAnArrayOfObject;
