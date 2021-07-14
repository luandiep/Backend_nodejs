
INSERT INTO [dbo].[AppRoles]
    (
            [Id],
            [Name],
            [Description],
            [Discriminator]
    )
VALUES 
    (
        @Id,
        @Name,
        @Description,
        @Discriminator
    )

