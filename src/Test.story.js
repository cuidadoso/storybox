/**
 * Created by Alejandro on 05.03.2017.
 */
import React from 'react';

module.exports = function ({ storiesOf, action }) {
    return storiesOf('Test', module)
        .add('default', () => (
            <button onClick={action('click')}>
                Hello World
            </button>
        ))
        .add('emoji', () => (
            <button onClick={action('click')}>
                Hello 🎃
            </button>
        ));
};