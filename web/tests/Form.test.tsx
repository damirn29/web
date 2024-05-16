import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../src/pages/contact/contact'

describe('Contact', () => {
    it('renders contact information', () => {
        render(<Contact />);


        const heading = screen.getByText('Контакты');
        if (!heading) throw new Error('Heading not found');


        const description = screen.getByText('Вы можете связаться с нами, используя следующие контактные данные.');
        if (!description) throw new Error('Description not found');

        const email = screen.getByText('Email: example@example.com');
        if (!email) throw new Error('Email information not found');

        const phone = screen.getByText('Телефон: +123456789');
        if (!phone) throw new Error('Phone information not found');
    });
});