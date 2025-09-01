import React, { Component } from 'react';
import styles from './ContactList.module.css';

export class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            phone: '',
            email: '',
            contact: []
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.userName.trim()) {
            alert("Name cannot be empty");
            return;
        }

        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(this.state.phone)) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.state.email)) {
            alert("Please enter a valid email");
            return;
        }

        const newContact = {
            name: this.state.userName,
            phone: this.state.phone,
            email: this.state.email
        };

        this.setState((prevState) => ({
            contact: [...prevState.contact, newContact],
            userName: '',
            phone: '',
            email: ''
        }));
    };

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // ✅ Delete Contact Handler
    handleDelete = (index) => {
        const updatedContacts = this.state.contact.filter((_, i) => i !== index);
        this.setState({ contact: updatedContacts });
    };

    render() {
        const { userName, phone, email, contact } = this.state;

        return (
            <div className={styles.container}>
                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <h1>Enter your Contact</h1>
                    <div className={styles.list}>
                        <label>Enter your Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={userName}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className={styles.list}>
                        <label>Enter your Phone Number</label>
                        <input
                            name="phone"
                            type="number"
                            value={phone}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className={styles.list}>
                        <label>Enter your Email</label>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type="submit" className={styles.btn}>
                        Add to contact
                    </button>
                </form>

                {/* Saved Contacts */}
                <div className={styles.contactList}>
                    <h2>Saved Contacts</h2>
                    {contact.length === 0 ? (
                        <p>No contacts added yet.</p>
                    ) : (
                        <div>
                            {contact.map((contact, index) => (
                                <div key={index}>
                                    <p>{contact.name}</p>
                                    <p>{contact.phone}</p>
                                    <p>{contact.email}</p>
                                    <button className={styles.btn}>Edit</button>
                                    <button
                                        className={styles.delete}
                                        onClick={() => this.handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ContactList;

