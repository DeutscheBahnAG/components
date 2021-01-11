import React, { useCallback, useState } from 'react';
import loadable from '@loadable/component';
import Select from '../../select';
import Button from '../../button';

import { ExampleChildren, modalActions } from './shared';

const Modal = loadable(() => import('../modal'), { ssr: false });

const sizes = [
  { value: 'auto', label: 'Automatic [auto]' },
  { value: 's', label: 'Small [s]' },
  { value: 'm', label: 'Medium [m]' },
  { value: 'l', label: 'Large [l]' },
];

const responsiveBreakpoints = [
  { value: 'none', label: 'None [none]' },
  { value: 's', label: 'Small [s]' },
  { value: 'm', label: 'Medium [m]' },
  { value: 'l', label: 'Large [l]' },
];

const ModalSizes = () => {
  const [size, setSize] = useState('m');
  const [actionCenter, setActionCenter] = useState('none');
  const [actionFull, setActionFull] = useState('none');
  const onClickSize = useCallback(
    (s) => {
      setSize(s);
    },
    [setSize]
  );
  const onClickActionCenter = useCallback(
    (a) => {
      setActionCenter(a);
    },
    [setActionCenter]
  );
  const onClickActionFull = useCallback(
    (f) => {
      setActionFull(f);
    },
    [setActionFull]
  );
  return (
    <Modal
      title="Modal sizes"
      primaryButton={<Button>Primary</Button>}
      secondaryButton={<Button>Secondary</Button>}
      {...modalActions}
      size={size}
      centerActions={actionCenter}
      fullActionSize={actionFull}
      isOpen
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        You can try out the different <strong>sizes</strong> of the Modal:
        <br />
        <Select options={sizes} onChange={(e) => onClickSize(e.target.value)} value={size} />
      </label>
      <br />
      <br />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        The action buttons are <strong>centered</strong> up to the following{' '}
        <strong>viewport width</strong>:
        <br />
        <Select
          options={responsiveBreakpoints}
          onChange={(e) => onClickActionCenter(e.target.value)}
          value={actionCenter}
        />
      </label>
      <br />
      <br />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        The action buttons appear in <strong>full width</strong> up to the following{' '}
        <strong>viewport width</strong>:
        <br />
        <Select
          options={responsiveBreakpoints}
          onChange={(e) => onClickActionFull(e.target.value)}
          value={actionFull}
        />
      </label>
      <br />
      <br />
      <ExampleChildren title="General" textType="abstract" />
    </Modal>
  );
};

export default ModalSizes;
