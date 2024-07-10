import {loadUploadFiles} from "../../../src/core/usecases";

const makeSut = () => {
  const loadUploadFilesRepository = jest.fn();
  const sut = loadUploadFiles({loadUploadFilesRepository});
  return {
    sut, loadUploadFilesRepository
  }
}

describe('LoadUploadFiles', () => {
  it('Should call loadUploadFilesRepository with correct params', async () => {
    const {sut, loadUploadFilesRepository} = makeSut();
    const params = {mimeType: 'application/pdf'}
    await sut(params);
    expect(loadUploadFilesRepository).toHaveBeenCalledWith(params)
  })
});