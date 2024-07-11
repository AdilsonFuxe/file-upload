import {deleteUploadFileById} from "../../../src/core/usecases";
import {Upload} from "../../../src/core/models";


const makeSut = () => {
  const deleteUploadFileByIdRepository = jest.fn();
  const deleteLocalFile = jest.fn();
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
  const sut = deleteUploadFileById({deleteUploadFileByIdRepository, deleteLocalFile,loadUploadFileByIdRepository });
  return {
    sut, deleteUploadFileByIdRepository, loadUploadFileByIdRepository, deleteLocalFile, mockedUpload
  }
}

describe('Delete File', () => {

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

  it('Should call deleteUploadFileByIdRepository with correct params', async () => {
    const {sut, deleteUploadFileByIdRepository} = makeSut();
    await sut('any_id');
    expect(deleteUploadFileByIdRepository).toHaveBeenCalledWith('any_id');
  });

  it('Should throw if deleteUploadFileByIdRepository throws', async () => {
    const {sut, deleteUploadFileByIdRepository} = makeSut();
    deleteUploadFileByIdRepository.mockRejectedValue(new Error());
    const promise = sut('any_id');
    await expect(promise).rejects.toThrow(new Error())
  })

  it('Should call deleteLocalFile with correct param', async () => {
    const {deleteLocalFile, sut, mockedUpload} = makeSut();
    await sut('any_id');
    const upload = mockedUpload();
    expect(deleteLocalFile).toHaveBeenCalledWith(upload.key);
  });

  it('Should throw if deleteLocalFile throws', async () => {
    const {deleteLocalFile, sut} = makeSut();
    deleteLocalFile.mockRejectedValue(new Error());
    const promise = sut('any_id');
    await expect(promise).rejects.toThrow(new Error());
  });

  it('Should not call deleteLocalFile and deleteUploadFileByIdRepository if upload not found', async () => {
    const {deleteLocalFile, sut, loadUploadFileByIdRepository, deleteUploadFileByIdRepository, mockedUpload} = makeSut();
    loadUploadFileByIdRepository.mockResolvedValue(null);
    await sut('any_id');
    expect(deleteUploadFileByIdRepository).toHaveBeenCalledTimes(0);
    expect(deleteLocalFile).toHaveBeenCalledTimes(0);
  })
})