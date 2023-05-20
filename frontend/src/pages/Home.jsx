import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { calculateNetWorth } from '@/services';
import { toast } from 'react-toastify';

import { NetWorthForm, formSchema, INITIAL_VALUE } from '@/forms/NetWorthForm';

const Home = () => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: INITIAL_VALUE,
  });
  const { handleSubmit } = methods;

  const onSubmitHandler = async (values, e) => {
    try {
      setIsLoading(true);
      const { data } = await calculateNetWorth(values);
      setResponse(data);
    } catch (error) {
      toast.error('Ops! An Unexpected Error Occurred, please try again later');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods} response={response}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
        sx={{ mt: 1 }}
      >
        <LoadingButton
          variant="contained"
          sx={{ mb: 2 }}
          fullWidth
          disableElevation
          type="submit"
          loading={isLoading}
        >
          calculate net worth
        </LoadingButton>
        <NetWorthForm />
      </Box>
    </FormProvider>
  );
};

export default Home;
