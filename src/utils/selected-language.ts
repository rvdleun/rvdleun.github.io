export const getSelectedLanguage = () => {
    return window.location.search === '?nl' ? 'nl' : 'en';
}