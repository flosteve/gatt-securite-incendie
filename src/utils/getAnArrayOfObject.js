import React from 'react';

class GetAnArrayOfObject {
    static formatTabs = tabsTypeEquipements => {
        const arrayTabs = [];

        tabsTypeEquipements.map(tab => {
            const currentTab = {
                tabContent: (
                    <div
                        dangerouslySetInnerHTML={{ __html: tab.tab_content }}
                    />
                ),
                tabButton: tab.tab_button,
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
                    <div dangerouslySetInnerHTML={{ __html: tab.faq_answer }} />
                ),
                title: tab.faq_question,
            };
            arrayTabs.push(currentTab);
            return '';
        });
        return arrayTabs;
    };
}

export default GetAnArrayOfObject;
