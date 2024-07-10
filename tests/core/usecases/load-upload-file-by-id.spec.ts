import {LoadUploadFileById} from "../../../src/ports/in";
import {loadUploadFileById} from "../../../src/core/usecases";
import {Upload} from "../../../src/core/models";

const makeSut = () => {
  const mockedUpload = (): Upload => ({
    id: 'any_id',
    name: 'any_name',
    mimeType: 'any_mime',
    size: 0.3,
    key: 'any_key',
    createdAt: new Date(),
    updatedAt: new Date()
  })
  const loadUploadFileByIdRepository = jest.fn().mockResolvedValue(mockedUpload());
  const sut = loadUploadFileById({loadUploadFileByIdRepository});
  return {
    sut,
    loadUploadFileByIdRepository,
    mockedUpload
  }
}

describe('LoadUploadFileById', () => {
  it('Should call loadUploadFileByIdRepository with correct param', async () => {
    const {loadUploadFileByIdRepository, sut} = makeSut();
    await sut('any_id');
    expect(loadUploadFileByIdRepository).toHaveBeenCalledWith('any_id');
  });

  it('Should throw if loadUploadFileByIdRepository throws', async () => {
    const {loadUploadFileByIdRepository, sut} = makeSut();
    loadUploadFileByIdRepository.mockRejectedValue(new Error());
    const promise = sut('any_id');
    await expect(promise).rejects.toThrow(new Error());
  });

  it('Should return a upload file details on success', async () => {
    const { sut, mockedUpload } = makeSut();
    const result = await sut('any_id');
    expect(result).toEqual(mockedUpload())
  });
});