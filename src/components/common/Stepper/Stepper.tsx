import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface Props {
  stepIndex: number;
}

const StepperFC: React.FC<PropsWithChildren<Props>> = ({ stepIndex }) => {
  const steps = [
    { title: 'Bước 1', description: 'Chọn sản phẩm' },
    { title: 'Bước 2', description: 'Điền thông tin' },
    { title: 'Bước 3', description: 'Thanh toán' },
  ];

  const { activeStep } = useSteps({
    index: stepIndex,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperFC;
