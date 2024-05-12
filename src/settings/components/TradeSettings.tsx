import styled from 'styled-components';
import { Button, SettingsTile, SettingsTitle, Space } from '../../common';
import { Settings, useSettings } from '../SettingsProvider';
import { ImageItem } from '../../types';
import { useImages } from '../ImageProvider';
import { ChangeEvent } from 'react';

interface TradeFormat {
  name: string;
  version: string;
  settings: Settings;
  images: ImageItem[];
}

const StyledTradeButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const TradeSettings = () => {
  const [settings, setSettings] = useSettings();
  const [images, setImages] = useImages();

  const onExport = () => {
    const tradeFormat: TradeFormat = {
      name: `Export from ${new Date().toLocaleString()}`,
      version: '1',
      settings: settings,
      images: images,
    };
    const data = JSON.stringify(tradeFormat, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.how';
    a.click();
  };

  const onImport = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.how';
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async e => {
        const data = e.target?.result;
        if (typeof data !== 'string') {
          return;
        }
        const tradeFormat = JSON.parse(data) as TradeFormat;
        setSettings(tradeFormat.settings);
        setImages(tradeFormat.images);
      };
      reader.readAsText(file);
    };
    input.addEventListener('change', e =>
      onChange(e as unknown as ChangeEvent<HTMLInputElement>)
    );
    input.click();
  };

  return (
    <SettingsTile label={'Trade'}>
      <SettingsTitle>Export or import your settings and images.</SettingsTitle>
      <StyledTradeButtons>
        <Button onClick={onExport}>Export</Button>
        <Button onClick={onImport}>Import</Button>
      </StyledTradeButtons>
      <Space />
    </SettingsTile>
  );
};
