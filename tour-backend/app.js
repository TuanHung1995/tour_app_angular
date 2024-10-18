app.get('/tours/sort', (req, res) => {
    const { sortBy, sortOrder } = req.query;
  
    // Ví dụ về cách sắp xếp các tour theo tham số
    let sortedTours = tours.sort((a, b) => {
      if (sortBy === 'Tên') {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      if (sortBy === 'Giá') {
        return sortOrder === 'asc' ? a.discountedPrice - b.discountedPrice : b.discountedPrice - a.discountedPrice;
      }
      if (sortBy === 'Ngày khởi hành') {
        return sortOrder === 'asc' ? new Date(a.startDate) - new Date(b.startDate) : new Date(b.startDate) - new Date(a.startDate);
      }
      return 0;
    });
  
    res.json(sortedTours);
  });
  