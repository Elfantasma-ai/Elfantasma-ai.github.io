// After payment confirmation
function deliverProduct(productId) {
  const products = {
    1: {name: "Security Suite Pro", file: "security-suite.zip"},
    2: {name: "Crypto Trading Guide", file: "crypto-guide.pdf"},
    3: {name: "Hacker UI Kit", file: "ui-kit.zip"}
  };
  
  const link = document.createElement('a');
  link.href = `downloads/${products[productId].file}`;
  link.download = products[productId].file;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}