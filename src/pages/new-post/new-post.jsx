import React from 'react';
import Character_counter from '../../helpers/character-counter.js'
import { useNavigate } from 'react-router-dom'
import './new-post.css'

function New_post () {
    const [newForm, setNewForm] = React.useState ({
        title: "",
        subtitle: "",
        content: "",
        author: "",
        created: new Date(),
        readTime: 1,
        comments: 0,
        shares: 0,
    });

    const navigate = useNavigate();

    function handleChange(e) {
        const changedFieldName = e.target.name;

        e.target.name === "content" ? setNewForm ({
            ...newForm,
            readTime: Character_counter(e.target.value),
            [changedFieldName]: e.target.value
        }) : setNewForm({
            ...newForm,
            [changedFieldName]: e.target.value
        })
    }

    function onFormSubmit (e) {
        e.preventDefault();

        setNewForm({
            ...newForm,
            created: new Date()
        })

        navigate('/all-posts')

        console.log(newForm)
    }



    return (
        <>
            <h1>Post toevoegen</h1>
            <form onSubmit={onFormSubmit} className="form-new-post">
                <label htmlFor="title" className="form-new-post-label">
                    Titel
                    <input
                        type="text"
                        name="title"
                        value={newForm.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="subtitle" className="form-new-post-label">
                    Subtitel
                    <input
                        type="text"
                        name="subtitle"
                        value={newForm.subtitle}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="author" className="form-new-post-label">
                    Naam en achternaam
                    <input
                        type="text"
                        name="author"
                        value={newForm.author}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="content" className="form-new-post-label">
                    Blogpost
                    <textarea
                        name="content"
                        value={newForm.content}
                        onChange={handleChange}
                        minLength="300"
                        maxLength="2000"
                        cols="40"
                        rows="20"
                        required
                    />
                </label>
                <button type="submit" className="form-new-post-button">
                    Post
                </button>
            </form>
        </>

    )
}

export default New_post;