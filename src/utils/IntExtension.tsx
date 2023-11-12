const formatCurrency = (value: number) => {
    return value?.toLocaleString('zh-TW', {
        style: 'currency',
        currency: 'TWD'
    });
  };

export { formatCurrency };