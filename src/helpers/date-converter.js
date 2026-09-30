function Date_converter (created) {
    const date = new Date(created)

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };

    return date.toLocaleDateString('nl-NL', options);
}

export default Date_converter