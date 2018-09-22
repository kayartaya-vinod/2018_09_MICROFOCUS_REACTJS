import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import axios from 'axios';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

class ContactDetails extends Component {

    state = { contact: null };

    componentDidMount() {
        let { contact } = this.props.location;
        if (contact) {
            this.setState({ contact });
        }
        else {
            let id = this.props.match.params.id;
            if (id != '') {
                // fetch data from REST endpoint
                axios.get('http://localhost:4000/contacts/' + id)
                    .then(resp => this.setState({ contact: resp.data }));
            }
        }
    }

    render() {
        let output = null;
        let { contact } = this.state;

        if (contact) {
            let fullname = (contact.gender === 'Male' ? 'Mr.' : 'Ms.') +
                contact.first_name + ' ' + contact.last_name;
            output = (
                <Split>
                    <Box>
                        <Image src={contact.picture} size="medium" />
                    </Box>
                    <Box>
                        <h1>{fullname}</h1>
                        <Table>
                            <tbody>
                                <TableRow>
                                    <td>Email id</td>
                                    <td>{contact.email}</td>
                                </TableRow>

                                <TableRow>
                                    <td>Phone number</td>
                                    <td>{contact.phone}</td>
                                </TableRow>
                                
                                <TableRow>
                                    <td>City</td>
                                    <td>{contact.city}</td>
                                </TableRow>
                                <TableRow>
                                    <td>State</td>
                                    <td>{contact.state}</td>
                                </TableRow>
                                <TableRow>
                                    <td>Country</td>
                                    <td>{contact.country}</td>
                                </TableRow>
                                <TableRow>
                                    <td>Date of birth</td>
                                    <td>{contact.dob}</td>
                                </TableRow>
                            </tbody>
                        </Table>
                    </Box>
                </Split>
            );
        }



        return (
            <Section>{output}</Section>
        );
    }
}

export default ContactDetails;