import lodash from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';

const FormInput = ({
  name,
  label,
  prefix,
  type = 'text',
  className = '',
  bgClass = '',
  disabled = false,
  ...props
}) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const formattedErrorMessage = lodash?.get(errors, name)?.message;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <input
            {...field}
            {...props}
            type={type}
            disabled={disabled}
            onWheel={(event) => event.currentTarget.blur()}
            className="bg-primary-2 text-white h-[50px] bg-transparent outline outline-2 outline-white/10 outline-none pl-6 w-full font-body text-[15px] rounded-md focus:outline focus:outline-1 focus:outline-dimBlue"
          />
          {formattedErrorMessage ? (
            <div className="mt-2 text-sm text-secondary">
              {formattedErrorMessage?.toString()}
            </div>
          ) : null}
        </>
      )}
    />
  );
};

export default FormInput;
