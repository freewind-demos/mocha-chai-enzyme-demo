"use strict";

import React from 'react';
import Hello from '../src/hello.jsx';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import spies  from 'chai-spies';
import {shallow, mount} from 'enzyme';
import jsdomGlobal from 'jsdom-global';

jsdomGlobal();

chai.should();
chai.use(spies);
chai.use(chaiEnzyme());

describe('<Hello />', () => {

  it('shows fruit names', () => {
    const wrapper = mount(<Hello fruit={['AAA', 'BBB']}/>);
    wrapper.should.contain.text("Hello, I like:")
    // Notice: only `mount` allow to check text in inner components
    // `shallow` doesn't not
    wrapper.should.contain.text('Box: AAA')
  });

});
