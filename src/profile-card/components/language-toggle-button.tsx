import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

interface ColorToggleButtonProps {
  language: string;
  handleChange: (_event: React.MouseEvent<HTMLElement>, newLanguage: string) => void;
}


export default function ColorToggleButton({ language, handleChange}: ColorToggleButtonProps) {

  return (
    <div className="absolute top-2 right-2 bg-blue-50 rounded-md">
        <ToggleButtonGroup
            color="primary"
            value={language}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            size="small"
            >
            <ToggleButton value="en"><img src="/us.svg" alt="US Flag" className="size-7 rounded-md" /></ToggleButton>
            <ToggleButton value="pt"><img src="/br.svg" alt="BR Flag" className="size-7 rounded-md" /></ToggleButton>
            <ToggleButton value="es"><img src="/es.svg" alt="SP Flag" className="size-7 rounded-md" /></ToggleButton>
        </ToggleButtonGroup>
    </div>
    
  );
}