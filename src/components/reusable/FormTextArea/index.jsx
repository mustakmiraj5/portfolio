import { Controller, useFormContext } from 'react-hook-form';

const FormTextarea = ({
  name,
  label,
  rows = 3,
  bgClass,
  disabled = false,
  isLargeLabel,
  ...props
}) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();
  const errorMessage = errors?.[name]?.message;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div>
          <textarea
            {...field}
            {...props}
            disabled={disabled}
            onWheel={(event) => event.currentTarget.blur()}
            rows={rows}
            className="bg-primary-2 text-white resize-none w-full bg-transparent outline outline-2 outline-white/10 outline-none p-6 rounded-md h-[200px] focus:outline focus:outline-1 focus:outline-dimBlue"
          />
          {errorMessage ? (
            <div className="mt-2 text-sm text-secondary">{`${errorMessage}`}</div>
          ) : null}
        </div>
      )}
    />
  );
};

export default FormTextarea;
