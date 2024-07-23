document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        const iconContainer = header.querySelector('.icon-container');

        if (accordionContent.style.maxHeight === '0px' || !accordionContent.style.maxHeight) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionItem.classList.add('bg-[#161616]');
            iconContainer.classList.add('rotate-45');
        } else {
            accordionContent.style.maxHeight = '0px';
            accordionItem.classList.remove('bg-[#161616]');
            iconContainer.classList.remove('rotate-45');
        }
    });
});

// Set the first accordion item to be open by default
document.addEventListener('DOMContentLoaded', () => {
    const firstAccordionItem = document.querySelector('.accordion-item');
    const firstAccordionContent = firstAccordionItem.querySelector('.accordion-content');
    const firstIconContainer = firstAccordionItem.querySelector('.icon-container');

    firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + 'px';
    firstAccordionItem.classList.add('bg-[#161616]');
    firstIconContainer.classList.add('rotate-45');
});
