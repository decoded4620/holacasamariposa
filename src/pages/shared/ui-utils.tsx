
import { Box } from '@mui/system';
import ActionButton from '../../components/core/buttons/action-button';
import sharedStyles from '../../pages/shared-page-styles.module.scss'

export function getActionButton(actionlink: string, label: string) {
  return (
    <Box className={sharedStyles.buttonRow}>
      <ActionButton link={actionlink} label={label}></ActionButton>
    </Box>
  );
}