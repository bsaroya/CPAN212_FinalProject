exports.validateFields = (fields) => {
    const errors = [];
    for (const [key, value] of Object.entries(fields)) {
      if (!value) errors.push(`${key} is required`);
    }
    return errors;
  };
  