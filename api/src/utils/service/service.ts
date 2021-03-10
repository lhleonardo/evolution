export interface Service <Params, Result> {
  execute(params: Params): Promise<Result>;
}
