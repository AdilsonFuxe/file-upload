import {loadUploadFiles} from "../../../src/core/usecases";

const makeSut = () => {
  const mockedUploads = () => ([{
    id: 'any_id',
    name: 'any_name',
    mimeType: 'any_mime',
    size: 0.3,
    key: 'any_key',
    createdAt: new Date(),
    updatedAt: new Date()
  }])
  const loadUploadFilesRepository = jest.fn().mockResolvedValue(mockedUploads());
  const sut = loadUploadFiles({loadUploadFilesRepository});
  return {
    sut, loadUploadFilesRepository, mockedUploads
  }
}

describe('LoadUploadFiles', () => {
  it('Should call loadUploadFilesRepository with correct params', async () => {
    const {sut, loadUploadFilesRepository} = makeSut();
    const params = {mimeType: 'application/pdf'}
    await sut(params);
    expect(loadUploadFilesRepository).toHaveBeenCalledWith(params)
  })

  it('Should throw if loadUploadFilesRepository throws', async () => {
    const {sut, loadUploadFilesRepository} = makeSut();
    loadUploadFilesRepository.mockRejectedValue(new Error());
    const promise = sut({});
    await expect(promise).rejects.toThrow(new Error())
  })

  it('Should return a list of files data on success', async () => {
    const {sut, mockedUploads} = makeSut();
    const result = await sut({});
    expect(result).toEqual(mockedUploads())
  })
});