import React from 'react';
import block from 'bem-cn-lite';
// eslint-disable-next-line prettier/prettier
import { Button, Label, Dialog, Icon } from '@gravity-ui/uikit';
import iconGitHub from './assets/icons/github.svg';
import iconStorybook from './assets/icons/storybook.svg';
import iconTelegram from './assets/icons/telegram.svg';
import logo from './assets/logo.svg';

const b = block('app');

export const ExamplePage = () => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  return (
    <div className={b()}>
      <h1 className={b('header')}>UIKit example – Create React App</h1>
      <img src={logo} className={b('logo')} alt="logo" />
      <div className={b('content')}>
        <div className={b('content-item')}>
          <Label className={b('label')} theme="normal">
            normal
          </Label>
          <Label className={b('label')} theme="info">
            info
          </Label>
          <Label className={b('label')} theme="success">
            success
          </Label>
          <Label className={b('label')} theme="warning">
            warning
          </Label>
          <Label className={b('label')} theme="danger">
            danger
          </Label>
          <Label className={b('label')} theme="unknown">
            unknown
          </Label>
          <Label className={b('label')} theme="clear">
            clear
          </Label>
        </div>
        <div className={b('content-item')}>
          <Button
            onClick={() => {
              setDialogOpen(true);
            }}
            view="action"
            pin="circle-circle"
            size="xl"
            width="max"
          >
            Show dialog
          </Button>
          <Dialog
            open={dialogOpen}
            onClose={() => {
              setDialogOpen(false);
            }}
            onEnterKeyDown={() => {
              setDialogOpen(false);
            }}
          >
            <Dialog.Header caption="Title" />
            <Dialog.Body>Content</Dialog.Body>
            <Dialog.Footer
              onClickButtonApply={() => {
                setDialogOpen(false);
              }}
              onClickButtonCancel={() => {
                setDialogOpen(false);
              }}
              textButtonApply="Apply"
              textButtonCancel="Cancel"
            />
          </Dialog>
        </div>
      </div>
      <h3 className={b('header')}>Useful links</h3>
      <div className={b('buttons-block')}>
        <Button
          className={b('button')}
          size="l"
          view="outlined"
          href="https://github.com/gravity-ui"
          target="_blank"
        >
          <Icon data={iconGitHub} />
          GitHub
        </Button>
        <Button
          className={b('button')}
          size="l"
          view="outlined"
          href="https://preview.gravity-ui.com/uikit/"
          target="_blank"
        >
          <Icon data={iconStorybook} size={16} />
          Storybook
        </Button>
        <Button
          className={b('button')}
          size="l"
          view="outlined"
          href="https://t.me/gravity_ui"
          target="_blank"
        >
          <Icon data={iconTelegram} />
          Telegram
        </Button>
      </div>
    </div>
  );
};
