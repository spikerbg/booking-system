export const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric',hour: 'numeric', minute: 'numeric', };
    
    return new Date(isoDate).toLocaleDateString(undefined, options);
};