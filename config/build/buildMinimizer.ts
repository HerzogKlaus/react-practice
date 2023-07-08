import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export function buildMinimizer() {
  return [
    new CssMinimizerPlugin(),
  ];
}
